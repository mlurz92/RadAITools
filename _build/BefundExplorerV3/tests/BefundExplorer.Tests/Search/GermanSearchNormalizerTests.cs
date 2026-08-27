using Xunit;
using BefundExplorer.Core.Search;
namespace BefundExplorer.Tests.Search;
public sealed class GermanSearchNormalizerTests
{
    [Theory]
    [InlineData("Ödem", "oedem")]
    [InlineData("ÜBER", "ueber")]
    [InlineData("Fuß", "fuss")]
    [InlineData("Äste", "aeste")]
    [InlineData("Crème", "creme")]
    public void NormalizeTolerant_ProducesGermanSearchForm(string input, string expected)
        => Assert.Equal(expected, GermanSearchNormalizer.NormalizeTolerant(input));

    [Fact]
    public void Tokenize_ExtractsWordsAndNumbers()
        => Assert.Equal(["L5", "S1", "Ödem"], GermanSearchNormalizer.Tokenize("L5/S1 – Ödem"));
}
