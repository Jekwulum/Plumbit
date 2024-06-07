const Queries = {
  createPartsableQuery: `
      CREATE TABLE IF NOT EXISTS parts (
        part_id UUID PRIMARY KEY,
        part_name TEXT NOT NULL,
        quantity INT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
  `,

  createRepairTypesTableQuery: `
      CREATE TABLE IF NOT EXISTS repair_types (
        repair_type_name TEXT PRIMARY KEY,
        required_parts UUID[] NOT NULL
      );
  `,

  getPartsQuery: `SELECT * FROM parts WHERE part_id = ANY($1);`,

  getAllPartsQuery: `SELECT * FROM parts;`,

  getRequiredPartsQuery: `SELECT required_parts FROM repair_types WHERE repair_type_name = $1;`,

  getPartsQuantityQuery: `SELECT part_name, quantity FROM parts WHERE part_id = $1 FOR UPDATE;`,

  updatePartQuantity: `UPDATE parts SET quantity = $1 WHERE part_id = $2;`,
};

export default Queries;