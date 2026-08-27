using Xunit;
using BefundExplorer.Core.Data;
using BefundExplorer.Core.Models;
using BefundExplorer.Core.Search;
namespace BefundExplorer.Tests.Data;
public sealed class IntelligentSearchTests
{
 [Fact]
 public async Task IntelligentSearch_FindsTermInsideMedicalCompound()
 {
  using var db=new TestDatabase(); var repo=new SqliteReportRepository(db.Path);
  var page=await repo.SearchAsync(new SearchRequest("Band",SearchMode.Intelligent));
  Assert.Contains(page.Items,x=>x.Id==5);
 }
}
