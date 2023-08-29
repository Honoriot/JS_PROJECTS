# OOP             Feature	Description
> - **Class**	        Can be created using the class keyword
> - **Constructor**	    Can be created using the constructor keyword
> - **Attributes**	    Variables created as this.<variableName> inside the constructor become attributes
> - **Methods**	        Functions created inside the class become methods
> - **Object**	        Created using the new keyword
> - **Access**	        The attributes and methods can be accessed using the dot operator on the object

Example::
```javascript
    class Employee{
        constructor(id,name,age){
            this.id=id;
            this.name=name;
            this.age=age;
        }
        swipeIn(){
            console.log("Employee "+this.id+" has swiped in at "+new Date());
        }
    }

    e1 = new Employee(100,"Mark",23);
    e2 = new Employee(101,"Jane",24);
    console.log(e1.age);
    e1.swipeIn();
    e2.swipeIn();
```
# Static methods in class:
```javascript
    class Employee{
        constructor(id,name,age){
            this.id=id;
            this.name=name;
            this.age=age;
        }
        swipeIn(){
            console.log("Employee "+this.id+" has swiped in at "+new Date());
        }
        static code(){
            console.log("Employee is coding");
        }
    }
    Employee.code();
```
# Inheritance:
>- In JavaScript, one class can inherit another class using the extends keyword. 
>- The subclass inherits all the methods ( both static and non-static ) of the parent class.
```javascript
    class Employee{
        constructor(id,name,age){
            this.id=id;
            this.name=name;
            this.age=age;
        }
        swipeIn(){
            console.log("Employee "+this.id+" has swiped in at "+new Date());
        }
        static code(){
            console.log("Employee is coding");
        }
    }
    class PartTimeEmployee extends Employee{
    }
    e1=new Employee(100,"Mark",23);
    e2= new PartTimeEmployee();
    PartTimeEmployee.code();
    e2.swipeIn();
```

# The super keyword:
>- In order to access the parent class constructor, the child class constructor 
>- Need to invoke it using super() and pass the necessary values. 
>- Note that super keyword must appear before this keyword in constructor.
```javascript
    class Employee{
        constructor(id,name,age){
            this.id=id;
            this.name=name;
            this.age=age;
        }
        swipeIn(){
            console.log("Employee "+this.id+" has swiped in at "+new Date());
        }
        static code(){
            console.log("Employee is coding");
        }
    }
    class PartTimeEmployee extends Employee{
        constructor(id,name,age,contractPeriod){
            super(id,name,age);
            this.contractPeriod=contractPeriod;
        }
    }
    e1=new Employee(100,"Mark",23);
    e2= new PartTimeEmployee(101,"Jane",34,3);
    PartTimeEmployee.code();
    e2.swipeIn();
    console.log(e2.contractPeriod);
```