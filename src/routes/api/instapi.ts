import { NextFunction, Request, Response, Router } from "express";

export class InstApi {

    public static createRoutes(router: Router) {
        //log
        console.log("[InstApi::createRoutes] Creating InstApi routes.");

        router.get("/api/test", (req: Request, res: Response, next: NextFunction) => {
            res.setHeader('Content-Type', 'application/json');
            res.status(200);
            res.json({success: true});
        });
    }

}