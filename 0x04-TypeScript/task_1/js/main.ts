export interface Teacher {
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string,
    [key: string]: any,
}


export interface Directors extends Teacher {
    numberOfReports: number,
}


interface PrintTeacherFunction {
    (firstName: string, lastName: string): void;
}

const print_teachers: PrintTeacherFunction = (firstName: string, lastName: string): void => {
    console.log(`${firstName.charAt(0)}. ${lastName}`);
}


interface StudentClassInterface {
    workOnHomework(): string,
    displayName(): string,
}

interface StudentClassConstructorInterface {
    firstName: string,
    lastName: string,
}



class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;

    constructor(args: StudentClassConstructorInterface) {
        this.firstName = args.firstName;
        this.lastName = args.lastName;
    }

    workOnHomework(): string {
        return "Currently working";
    }

    displayName(): string {
        return this.firstName;
    }
}