import {Asset} from './asset'

export class Vehicle {

	//License plate
	License: string;
	//Vehicle Identification Number (usually in the driver's door)
	VIN: string;
	//The Vehicle's Make
	Make: string;
	//The Vehicle's Model
	Model: string;
	//Does the Vehicle have utility/emergency lights?
	HasLights: boolean;
	
	constructor(
		License: string,
		VIN: string,
		Make: string,
		Model: string,
		HasLights: boolean
	) {
		this.License = License;
		this.VIN = VIN;
		this.Make = Make;
		this.Model = Model;
		this.HasLights = HasLights;
		
	}
}
