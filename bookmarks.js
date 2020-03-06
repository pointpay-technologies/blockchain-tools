import {Router} from "express";
import {Op} from "sequelize";
import request from "request";
import {validate, capitalize} from "validate.js";
import uuidv4 from "uuid/v4";
import {limitConstraints, offsetConstraints} from "../../validators/basic";
import models from "../../models";
import constants from "../../constants";
import {favoritesConstraints, linkConstraints} from "../../validators/bookmark";

const router = Router();

router.get("/:filter?/:filter_from?/:filter_to?/:sort_by?/:sort_dir?", async (req, res) => {
    try {
        const validationResult = validate(req.body, {
            limit: limitConstraints,
            offset: offsetConstraints
        });

        if (validationResult) {
            res.status(400).json({errors: validationResult})
        } else {
            let offset = req.body.offset || 0;
            let limit = req.body.limit || 50;
            const whereClause = {};
            const orderClause = [];

            if (req.query.filter) {
                switch (req.query.filter) {
                    case !("createdAt"):
                    case !("favorites"):
                        res.status(400).json({errors: {backend: ["filter value expected to be createdAt or favorites"]}});
                        break;
                    case "createdAt":
                        if (req.query.filter_from && req.query.filter_to && (req.query.filter_from > req.query.filter_to)) {
                            res.status(400).json({errors: {backend: ["start date cannot be greater than end date"]}});
                        } else {
                            if (req.query.filter_value) {
                                whereClause["createdAt"] = req.query.filter_value;
                            } else {
                                // flter_value is empty:
                                let filter_from = {};
                                let filter_to = {};
                                if (req.query.filter_to) {
                                    filter_from = {[Op.lte]: req.query.filter_to};
                                }
                                if (req.query.filter_from) {
                                    filter_to = {[Op.gte]: req.query.filter_from};
                                }
                                whereClause.createdAt = {...filter_from, ...filter_to};
                            }
                            console.log("this is where: " + whereClause);
                        }
                        break;
                    case "favorites":
                        if (req.query.filter_value !== (true || false || undefined)) {
                            res.status(400).json({errors: {backend: ["filter value for fovorites can be true or false"]}});
                        } else {
                            whereClause["favorites"] = req.query.filter_value;
                        }
                    //here we ignore from to values
                }
            }

            if (req.query.sort_by) {
                switch (req.query.sort_by) {
                    case !"createdAt":
                    case !"favorites":
                        res.status(400).json({errors: {backend: ["sort_by value expected to be createdAt or favorites"]}});
                }
                let order = [];
                order.push(req.query.sort_by);
                if (req.query.sort_dir && req.query.sort_dir.toUpperCase() === ("ASC" || "DESC")) {
                    order.push(req.query.sort_dir);
                } else {
                    //default order is applied
                    order.push("ASC");
                }
                orderClause.push(order);
            }
            console.log(`this is whereClause: ${whereClause}`);
            let results = await models.bookmark.findAll({
                where: whereClause,
                order: orderClause,
                offset,
                limit
            });

            res.json({
                data: results
            });
        }
    } catch (error) {
        res.status(400).json({errors: {backend: ["Can't get list of bookmarks", error]}})
    }
});
export default router;
