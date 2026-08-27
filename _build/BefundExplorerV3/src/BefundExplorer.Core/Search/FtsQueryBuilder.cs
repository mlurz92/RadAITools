namespace BefundExplorer.Core.Search;

public static class FtsQueryBuilder
{
    private static readonly IReadOnlyDictionary<SearchField, string> ColumnMap = new Dictionary<SearchField, string>
    {
        [SearchField.StudyDescription] = "studienbeschreibung",
        [SearchField.Title] = "titel",
        [SearchField.ClinicalInformation] = "klinische_angaben",
        [SearchField.Question] = "fragestellung",
        [SearchField.Technique] = "methodik",
        [SearchField.Findings] = "befund",
        [SearchField.Impression] = "beurteilung"
    };

    public static string Build(string? input, SearchMode mode, SearchField field = SearchField.All)
    {
        var text = (input ?? string.Empty).Trim();
        if (text.Length == 0)
            return string.Empty;

        string expression = mode switch
        {
            SearchMode.Expert => text,
            SearchMode.ExactPhrase => QuotePhrase(text),
            SearchMode.Substring => QuotePhrase(text),
            SearchMode.Prefix => BuildTokens(text, " AND ", prefix: true),
            SearchMode.AnyWord => BuildTokens(text, " OR "),
            SearchMode.Tolerant => BuildTokens(GermanSearchNormalizer.NormalizeTolerant(text), " AND "),
            SearchMode.Intelligent => BuildTokens(text, " AND "),
            _ => BuildTokens(text, " AND ")
        };

        if (expression.Length == 0 || field == SearchField.All)
            return expression;

        var column = ColumnMap[field];
        return expression.Contains(" AND ", StringComparison.Ordinal) || expression.Contains(" OR ", StringComparison.Ordinal)
            ? $"{column} : ({expression})"
            : $"{column} : {expression}";
    }

    private static string BuildTokens(string input, string separator, bool prefix = false)
    {
        var tokens = GermanSearchNormalizer.Tokenize(input);
        return string.Join(separator, tokens.Select(token => QuoteToken(token) + (prefix ? "*" : string.Empty)));
    }

    private static string QuoteToken(string token)
        => $"\"{token.Replace("\"", "\"\"", StringComparison.Ordinal)}\"";

    private static string QuotePhrase(string phrase)
        => $"\"{phrase.Replace("\"", "\"\"", StringComparison.Ordinal)}\"";
}
