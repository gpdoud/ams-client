//Make sure to import the models that an Asset may refer to
import {Vehicle} from './vehicle'
import {Location} from './location'

export class Asset {
	
	Id: number;
	//Who sells the Asset?
	Vendor: string;//show in the asset-list
	//What is the Asset called?
	Name: string;//show in the asset-list
	//When was the Asset purchased?
	PurchaseDate: Date;
	//What is the Asset's Purchase Order Number?
	PurchaseOrderNumber: string;//show in the asset-list
	//How much money has been spent to buy and maintain the Asset?
	AssetCost: number;
	//When did the Asset go out for repair?
	OutForRepairDate: Date;
	//When did the Asset come back from repair?
	BackFromRepairDate: Date;
	//When did the Asset stop seeing usuage?
	RetiredDate: Date;
	//When was the Asset sold as surplus?
	SurplusDate: Date;
	//How much money was received for the Asset?
	SaleProceeds: number;
	//What is the file path for a picture of the Asset>
	PhotoPath: string;
	//Is the Asset Type a Vehicle, a piece of Equipment, or Furniture?
	Type: string;
	//If the Asset is a Vehicle, here is where that gets attached.
	Vehicle: Vehicle;
	//If the Asset is a piece of Equipment, here is where that gets attached.
	//Equipment: Equipment;
	//If the Asset is Furniture, here is where that gets attached.
	//Furniture: Furniture;
	//What is the foreign key that links to the Location?
	LocationId: number;
	//Where is the Asset, what is the Location?
	Location: Location;//show in the asset-list
	//Who is the person, or who are the people assigned to use the Asset?
	AssignedTo: string;
	//What is the Asset's Service Record?
	//ServiceRecord:ServiceRecord;
		
	constructor(
		Id: number,
		Vendor: string,
		Name: string,
		PurchaseDate: Date,
		PurchaseOrderNumber: string,
		AssetCost: number,
		OutForRepairDate: Date,
		BackFromRepairDate: Date,
		RetiredDate: Date,
		SurplusDate: Date,
		SaleProceeds: number,
		PhotoPath: string,
		Type: string,
		Vehicle: Vehicle,
		LocationId: number,
		Location: Location
		//ServiceRecord: ServiceRecord
		)

	 {
	 	this.Id = Id;
	 	this.Vendor = Vendor;
	 	this.Name = Name;
	 	this.PurchaseDate = PurchaseDate;
	 	this.PurchaseOrderNumber = PurchaseOrderNumber;
	 	this.AssetCost = AssetCost;
	 	this.OutForRepairDate = OutForRepairDate;
	 	this.BackFromRepairDate = BackFromRepairDate;
	 	this.RetiredDate = RetiredDate;
	 	this.SurplusDate = SurplusDate;
	 	this.SaleProceeds = SaleProceeds;
	 	this.PhotoPath = PhotoPath;
	 	this.Type = Type;
	 	this.Vehicle = Vehicle;
	 	this.LocationId = LocationId;
	 	this.Location = Location;
	 	//this.ServiceRecord: ServiceRecord;
	 	}


}
