using BefundExplorer.Core.Models;
namespace BefundExplorer.Core.Data;
public interface IReportRepository { Task<SearchPage> SearchAsync(SearchRequest request,CancellationToken cancellationToken=default); Task<ReportRecord?> GetByIdAsync(long id,CancellationToken cancellationToken=default); Task<FilterOptions> GetFilterOptionsAsync(CancellationToken cancellationToken=default); }
