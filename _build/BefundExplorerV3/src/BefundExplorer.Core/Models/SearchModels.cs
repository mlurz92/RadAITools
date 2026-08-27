using BefundExplorer.Core.Search;
namespace BefundExplorer.Core.Models;
public enum SortMode { Relevance, OriginalAscending, OriginalDescending, StudyAscending }
public sealed record SearchRequest(string Query = "", SearchMode Mode = SearchMode.Intelligent, SearchField Field = SearchField.All, bool IncludeCt = true, bool IncludeMr = true, string? StudyDescription = null, string? StructureStatus = null, bool? HasImpression = null, int Page = 1, int PageSize = 50, SortMode Sort = SortMode.Relevance);
public sealed record ReportSummary(long Id,string Modality,string StudyDescription,string Title,string ClinicalInformation,string Question,string Findings,string Impression,string StructureStatus,string Snippet,double Relevance);
public sealed record ReportRecord(long Id,string Modality,string StudyDescription,string Title,string ClinicalInformation,string Question,string Technique,string Findings,string Impression,string OriginalText,string StructureStatus);
public sealed record SearchPage(IReadOnlyList<ReportSummary> Items,int TotalCount,int Page,int PageSize){ public int TotalPages => TotalCount == 0 ? 1 : (int)Math.Ceiling(TotalCount / (double)PageSize); }
public sealed record FilterOptions(IReadOnlyList<string> StudyDescriptions,IReadOnlyList<string> StructureStatuses,int CtCount,int MrCount,int TotalCount);
