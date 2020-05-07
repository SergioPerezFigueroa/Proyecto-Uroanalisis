import {Request, Response} from "express";
import {getConnection} from "typeorm";
import {Empleado} from "../entity/Empleado.entity"

export class EmpleadoService{

    public async getAll(req: Request, res: Response){
        const Empleados = await getConnection().getRepository(Empleado).find();
        res.status(200).json(Empleados);
    }

   /* //video 15
    public async getOne(req: Request ,  res: Response){
        const supplier :Supplier[] = await getConnection().getRepository(Supplier).find({ where :{SupplierID: req.params.id } }); 
        res.status(200).json(supplier[0]);
    }

    //VIDEO  16 
    public async getOneSummary(req: Request, res: Response){
        const supplier :ViewSuppliersByNProducts[] = await getConnection().getRepository(ViewSuppliersByNProducts).find({ where :{SupplierID: req.params.id } }); 
        res.status(200).json(supplier[0]);
    }

    public async updateOne(req:Request, res: Response){
        try{

            await getConnection().createQueryBuilder().update(Supplier)
            .set({
                SupplierName: req.body.SupplierName,
                ContactName:req.body.ContactName, 
                Address: req.body.Address,
                City: req.body.City,
                PostalCode: req.body.PostalCode,
                Country: req.body.Country,
                Phone: req.body.Phone
            })
            .where("SupplierID = :id",{id: req.params.id})
            .execute();

            res.status(200).json({
                updated: true
            });


        }catch(Error){
            res.status(401).json({
                updated: false,
                Message: Error.Message
            });
    
        */  }
       
    