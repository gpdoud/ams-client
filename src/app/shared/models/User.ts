export class User {
	
	Id: number;
	// Location: string;
	// Department: string;
	Username: string;
	Password: string;
	FirstName: string;
	LastName: string;
	Email: string;
	AdminLevel: number;
	IsActive: boolean;

	constructor(
		Id: number,
		// Location: string,
		// Department: string,
		Username: string,
		Password: string,
		FirstName: string,
		LastName: string,
		Email: string,
		AdminLevel: number,
		IsActive: boolean
	) {
		this.Id = Id;
		// this.Location = Location;
		// this.Department = Department;
		this.Username = Username;
		this.Password = Password;
		this.FirstName = FirstName;
		this.LastName = LastName;
		this.Email = Email;
		this.AdminLevel = AdminLevel;
		this.IsActive = IsActive;
	}
}