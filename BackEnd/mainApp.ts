import { Application, Request, Response, NextFunction } from "express";
import { mainError } from "./error/mainError";
import { HTTP } from "./utils/enums";
import { handleError } from "./error/handleError";
import marchant from "./router/marchantRouter"
import store from "./router/storeRouter";



export const mainApp = (app: Application) =>{
try {
    app.use("/api", marchant)
    app.use("/api", store);
    app.get("/", (req: Request, res: Response) =>{
        try {
            return res.status(200).json({
                message: "Default Api"
            })
        } catch (error) {
            return res.status(404).json({
                message: "error Loading"
            })
        }
    })

    app.all("*", (req: Request, res: Response, next: NextFunction) =>{
        next(
          new mainError({
            name: `Route Error`,
            message: `Route Error: Because the page , ${req.originalUrl} doesn't exist`,
            status: HTTP.Bad_Request,
            success: false 
          })
        );
    })
    app.use(handleError)
} catch (error) {
    return error
}
}