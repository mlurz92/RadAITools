namespace BefundExplorer.Core.Search;
public static class GermanSearchNormalizer
{
    public static string NormalizeTolerant(string value) => value;
    public static IReadOnlyList<string> Tokenize(string value) => [value];
}
