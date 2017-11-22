export class ServiceRecord {
	
	Id: number;         // primary key, identity
	AssetId: number;    // foreign key to Asset.Id
	DocumentId: number; // scan of the invoice
	Date: Date;         // date service was done
	Total: number;      // invoice total
	Notes: string;      // any notes

	constructor(
		Id: number,     
		AssetId: number,  
		DocumentId: number,
		Date: Date,
		Total: number,
		Notes: string
	) {
		this.Id = Id;     
		this.AssetId = AssetId;    
		this.DocumentId = DocumentId;
		this.Date = Date;
		this.Total = Total;
		this.Notes = Notes;
	}
} 