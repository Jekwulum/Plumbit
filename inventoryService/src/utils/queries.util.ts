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
};

export default Queries;