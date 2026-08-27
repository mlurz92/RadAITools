using Xunit;
using BefundExplorer.Core.Data;
using BefundExplorer.Core.Models;
using BefundExplorer.Core.Search;
namespace BefundExplorer.Tests.Data;
public sealed class SqliteReportRepositoryTests
{
 [Fact] public async Task AllWords_FindsWordsSeparatedInFindings(){using var db=new TestDatabase();var repo=new SqliteReportRepository(db.Path);var page=await repo.SearchAsync(new SearchRequest("Leber Metastasen",SearchMode.AllWords));Assert.Contains(page.Items,x=>x.Id==4);}
 [Fact] public async Task ExactPhrase_DoesNotBehaveLikeAllWords(){using var db=new TestDatabase();var repo=new SqliteReportRepository(db.Path);var words=await repo.SearchAsync(new SearchRequest("Leber Metastasen",SearchMode.AllWords));var phrase=await repo.SearchAsync(new SearchRequest("Leber Metastasen",SearchMode.ExactPhrase));Assert.True(words.TotalCount>phrase.TotalCount);}
 [Fact] public async Task UnicodeSearch_FindsUppercaseUmlaut(){using var db=new TestDatabase();var repo=new SqliteReportRepository(db.Path);var page=await repo.SearchAsync(new SearchRequest("ödem",SearchMode.AllWords));Assert.Contains(page.Items,x=>x.Id==2);}
 [Fact] public async Task TolerantSearch_FindsOedemForOeVariant(){using var db=new TestDatabase();var repo=new SqliteReportRepository(db.Path);var page=await repo.SearchAsync(new SearchRequest("Oedem",SearchMode.Tolerant));Assert.Contains(page.Items,x=>x.Id==2);}
 [Fact] public async Task SubstringSearch_FindsInteriorSubstring(){using var db=new TestDatabase();var repo=new SqliteReportRepository(db.Path);var page=await repo.SearchAsync(new SearchRequest("pondylo",SearchMode.Substring));Assert.Contains(page.Items,x=>x.Id==2);}
 [Fact] public async Task ShortSubstringSearch_FindsTwoCharacterFragmentInsideToken(){using var db=new TestDatabase();var repo=new SqliteReportRepository(db.Path);var page=await repo.SearchAsync(new SearchRequest("L5",SearchMode.Substring));Assert.Contains(page.Items,x=>x.Id==5);}
 [Fact] public async Task FieldSearch_ImpressionDoesNotMatchClinicalOnlyOccurrence(){using var db=new TestDatabase();var repo=new SqliteReportRepository(db.Path);var page=await repo.SearchAsync(new SearchRequest("Leber",SearchMode.AllWords,SearchField.Impression));Assert.DoesNotContain(page.Items,x=>x.Id==3);}
 [Fact] public async Task ModalityFilter_CanRestrictToCt(){using var db=new TestDatabase();var repo=new SqliteReportRepository(db.Path);var page=await repo.SearchAsync(new SearchRequest("Metastasen",SearchMode.AllWords,IncludeCt:true,IncludeMr:false));Assert.All(page.Items,x=>Assert.Equal("CT",x.Modality));}
 [Fact] public async Task Relevance_PrioritizesImpressionOverClinicalInformation(){using var db=new TestDatabase();var repo=new SqliteReportRepository(db.Path);var page=await repo.SearchAsync(new SearchRequest("Metastasen",SearchMode.AllWords));Assert.Equal(1,page.Items.First().Id);}
 [Fact] public async Task GetById_ReturnsCompleteRecord(){using var db=new TestDatabase();var repo=new SqliteReportRepository(db.Path);var item=await repo.GetByIdAsync(2);Assert.NotNull(item);Assert.Contains("L5/S1",item!.Findings);Assert.Contains("Klinische Angaben",item.OriginalText);}
 [Fact] public async Task FilterOptions_ReturnCountsAndStudies(){using var db=new TestDatabase();var repo=new SqliteReportRepository(db.Path);var options=await repo.GetFilterOptionsAsync();Assert.Equal(5,options.TotalCount);Assert.Equal(2,options.CtCount);Assert.Equal(3,options.MrCount);Assert.Contains("MRT LWS",options.StudyDescriptions);}
}
