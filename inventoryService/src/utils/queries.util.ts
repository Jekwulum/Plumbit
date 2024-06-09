const Queries = {
  createPartsableQuery: `
      CREATE TABLE IF NOT EXISTS parts (
        part_id UUID PRIMARY KEY,
        part_name TEXT NOT NULL UNIQUE,
        quantity INT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
  `,

  createRepairTypesTableQuery: `
      CREATE TABLE IF NOT EXISTS repair_types (
        repair_type TEXT PRIMARY KEY,
        required_parts UUID[] NOT NULL
      );
  `,

  addPartQuery: `INSERT INTO parts (part_id, part_name, quantity) VALUES ($1, $2, $3) RETURNING *;`,

  addRepairTypeQuery: `INSERT INTO repair_types (repair_type, required_parts) VALUES ($1, $2) RETURNING *;`,

  getRepairTypesQuery: `SELECT repair_type FROM repair_types;`,

  updateRepairTypeQuery: `UPDATE repair_types SET required_parts = $1 WHERE repair_type = $2 RETURNING *;`,

  getPartsQuery: `SELECT * FROM parts WHERE part_id = ANY($1);`,

  getAllPartsQuery: `SELECT * FROM parts;`,

  getRequiredPartsQuery: `SELECT * FROM repair_types WHERE repair_type = $1;`,

  getPartsQuantityQuery: `SELECT part_name, quantity FROM parts WHERE part_id = $1 FOR UPDATE;`,

  updatePartQuantity: `UPDATE parts SET quantity = $1 WHERE part_id = $2;`,
};

export default Queries;