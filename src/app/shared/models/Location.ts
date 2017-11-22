export class Location {
	
	Id: number;
	Name: string;
	Department: string;
	Address: string;
	City: string;
	State: string;
	Phone: string;


	constructor(
		Id: number,
		Name: string,
		Department: string,
		Address: string,
		City: string,
		State: string,
		Phone: string
	) {
		this.Id = Id;
		this.Name = Name;
		this.Department = Department;
		this.Address = Address;
		this.City = City;
		this.State = State;
		this.Phone = Address;
	}
}