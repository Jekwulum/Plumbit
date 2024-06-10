import { Router } from "express";
import validateJWT from "../utils/validate.jwt";
import InventoryController from "../controllers/inventory.controller";
import InventoryValidator from "../validators/inventory.validator";
import validateResource from "../validators/validateResource";

const router = Router();
router.use(validateJWT);

router.post('/add-part', validateResource(InventoryValidator.addPart), InventoryController.AddPart);
router.post('/check-availability', validateResource(InventoryValidator.checkPartsAvailability), InventoryController.CheckPartsAvailability);
router.post('/add-repair-type', validateResource(InventoryValidator.addRepairType), InventoryController.AddRepairType);
router.get('/required-parts', validateResource(InventoryValidator.getRequiredParts), InventoryController.GetRequiredParts);
router.get('/repair-types', InventoryController.GetRepairTypes);
router.patch('/repair-types', validateResource(InventoryValidator.addRepairType), InventoryController.UpdateRepairType);
router.patch('/manage-stock-levels', validateResource(InventoryValidator.manageStockLevels), InventoryController.ManageStockLevels);

export default router;