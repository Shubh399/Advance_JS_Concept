// function CreatePencil(name,price,color){
//     this.name=name
//     this.price=price
//     this.color=color
//     CreatePencil.prototype.company="ICT"
//     this.write = function(text){
//         let h1 = document.createElement("h1")
//         h1.textContent=text
//         h1.style.color=color
//         document.body.append(h1)
//     }
// }
// let pencil1= new CreatePencil("Nataraj",10,"Black")
// let pencil2= new CreatePencil("DOMS",10,"red")

// function CreatePencils(name, company, price, color) {
//   this.name = name;
//   this.company = company;
//   this.price = price;
//   this.color = color;
// }
// CreatePencils.prototype.model=function(text){
//     let h1 = document.createElement("h1");
//     h1.textContent=text
//     h1.style.color=this.color
//     document.body.append(h1)
// };
// let pencil_version1=new CreatePencils("DOMS LIGHT","DOMS","15","red")
// let pencil_version2=new CreatePencils("DOMS DARK","DOMS","20","black")

class Createpencil {
  constructor(name, company, price, color) {
    this.name = name;
    this.company=company;
    this.price = price;
    this.color = color;
  }
  erase(){
    document.querySelectorAll('h1').forEach((el)=>{
        if(el.style.color===this.color){
            el.remove()
        }
    })
  }
  write(text) {
    let h1 = document.createElement("h1");
    h1.textContent = text;
    h1.style.color = this.color;
    document.body.append(h1);
  }
}
let p1=new Createpencil("APSARA1","ITC",10,"black")
let p2=new Createpencil("APSARA2","ITC",20,"blue")
