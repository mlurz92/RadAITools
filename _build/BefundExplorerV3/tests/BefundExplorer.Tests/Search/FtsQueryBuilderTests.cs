using BefundExplorer.Core.Search;
namespace BefundExplorer.Tests.Search;
public sealed class FtsQueryBuilderTests
{
    [Fact]
    public void AllWords_QuotesEveryTokenAndUsesAnd()
        => Assert.Equal("\"Leber\" AND \"Metastasen\"", FtsQueryBuilder.Build("Leber Metastasen", SearchMode.AllWords));

    [Fact]
    public void AnyWord_UsesOr()
        => Assert.Equal("\"Leber\" OR \"Metastasen\"", FtsQueryBuilder.Build("Leber Metastasen", SearchMode.AnyWord));

    [Fact]
    public void ExactPhrase_IsOneFtsPhrase()
        => Assert.Equal("\"kein Nachweis\"", FtsQueryBuilder.Build("kein Nachweis", SearchMode.ExactPhrase));

    [Fact]
    public void Prefix_AppendsWildcardOutsideQuotedTokens()
        => Assert.Equal("\"Spondylo\"*", FtsQueryBuilder.Build("Spondylo", SearchMode.Prefix));

    [Fact]
    public void ScopedSearch_UsesGermanDatabaseColumn()
        => Assert.Equal("beurteilung : \"Metastasen\"", FtsQueryBuilder.Build("Metastasen", SearchMode.AllWords, SearchField.Impression));

    [Fact]
    public void OrdinarySearch_EscapesQuotesInsteadOfInterpretingOperators()
        => Assert.Equal("\"OR\" AND \"1\" AND \"1\"", FtsQueryBuilder.Build("\" OR 1=1 --", SearchMode.AllWords));
}
