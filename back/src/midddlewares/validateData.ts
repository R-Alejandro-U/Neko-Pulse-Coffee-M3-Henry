import { NextFunction, Request, Response } from "express";

export const validation = {
    dateBody: function(req: Request, res: Response, next: NextFunction){
        const searchFilter: string[] = Object.keys(req.body);

        const filtered: string[] = searchFilter.filter((data) => !req.body[data]);

        if(filtered.length > 0) {
            res.status(400).json({
               message: `Es necesesaria la informacion de: ${filtered.join(", ")}`
            });
        } else {
            next();
        };
    },

    dateParams: function(req: Request, res: Response, next: NextFunction){
        const id: string = req.params.id;

        if(!id || isNaN(Number(id))){
            res.status(400).json({
               message: `Es necesesaria el id.`
            });
        } else {
            next();
        };
    },
}