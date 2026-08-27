using BefundExplorer.Core.Models;
namespace BefundExplorer.Core.Data;
public sealed class SqliteReportRepository(string databasePath) : IReportRepository
{
 public string DatabasePath { get; } = databasePath;
 public Task<SearchPage> SearchAsync(SearchRequest request,CancellationToken cancellationToken=default)=>Task.FromResult(new SearchPage(Array.Empty<ReportSummary>(),0,request.Page,request.PageSize));
 public Task<ReportRecord?> GetByIdAsync(long id,CancellationToken cancellationToken=default)=>Task.FromResult<ReportRecord?>(null);
 public Task<FilterOptions> GetFilterOptionsAsync(CancellationToken cancellationToken=default)=>Task.FromResult(new FilterOptions(Array.Empty<string>(),Array.Empty<string>(),0,0,0));
}
