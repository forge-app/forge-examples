// Define a User interface
export interface User {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  address: string;
  phone: string;
  company: string;
}

// Static array of 10 random users
export const users: User[] = [
  {
    id: "1f3b9a54-0fa1-4d7f-9df7-3bce5f1f86c3",
    name: "John Doe",
    email: "johndoe@example.com",
    createdAt: "2023-01-12T08:30:00.000Z",
    address: "123 Maple Street",
    phone: "+1-555-123-4567",
    company: "TechCorp",
  },
  {
    id: "23be0e77-8853-4f76-95a7-1be2670f527b",
    name: "Jane Smith",
    email: "janesmith@example.com",
    createdAt: "2023-02-22T10:15:00.000Z",
    address: "456 Oak Avenue",
    phone: "+1-555-987-6543",
    company: "Innovate Solutions",
  },
  {
    id: "edcb6ac0-3fa2-4423-b248-9b024e6f74c9",
    name: "Emily Johnson",
    email: "emilyjohnson@example.com",
    createdAt: "2023-03-05T14:45:00.000Z",
    address: "789 Pine Road",
    phone: "+1-555-555-7890",
    company: "Creative Minds",
  },
  {
    id: "5cf8f4cb-f295-4189-a36b-3db8f56c5e5e",
    name: "Michael Brown",
    email: "michaelbrown@example.com",
    createdAt: "2023-04-10T09:20:00.000Z",
    address: "321 Cedar Lane",
    phone: "+1-555-678-2345",
    company: "Brown Enterprises",
  },
  {
    id: "b9c9a1d2-16b9-4b89-9d23-f47f80fb9b3e",
    name: "Sophia Williams",
    email: "sophiawilliams@example.com",
    createdAt: "2023-05-01T16:00:00.000Z",
    address: "654 Birch Boulevard",
    phone: "+1-555-456-7891",
    company: "Global Ventures",
  },
  {
    id: "fa67ecb3-0210-4b6f-a67a-6ab865b89c7a",
    name: "David Martinez",
    email: "davidmartinez@example.com",
    createdAt: "2023-06-12T11:30:00.000Z",
    address: "987 Redwood Drive",
    phone: "+1-555-333-9876",
    company: "SkyTech Industries",
  },
  {
    id: "c9f5e210-98cb-48e5-9351-c7c8f7dfc6d9",
    name: "Olivia Garcia",
    email: "oliviagarcia@example.com",
    createdAt: "2023-07-08T13:50:00.000Z",
    address: "789 Aspen Road",
    phone: "+1-555-222-6543",
    company: "FutureWorks",
  },
  {
    id: "7f45f228-77e7-453a-9391-37e5aefec215",
    name: "Liam Wilson",
    email: "liamwilson@example.com",
    createdAt: "2023-08-14T15:10:00.000Z",
    address: "123 Spruce Court",
    phone: "+1-555-444-3210",
    company: "Tech Solutions Ltd",
  },
  {
    id: "a5d2fcbd-8f4e-4e53-8530-6f1b95b853af",
    name: "Isabella Lee",
    email: "isabellalee@example.com",
    createdAt: "2023-09-22T12:00:00.000Z",
    address: "567 Willow Avenue",
    phone: "+1-555-555-6789",
    company: "Lee Enterprises",
  },
  {
    id: "b5f1d2a9-e38e-4f90-9231-8a47fd4164f1",
    name: "James Davis",
    email: "jamesdavis@example.com",
    createdAt: "2023-10-05T17:25:00.000Z",
    address: "890 Sycamore Street",
    phone: "+1-555-987-1234",
    company: "Davis Technologies",
  },
];

// Define the Order interface
export interface Order {
  id: string;
  price: number;
  plan: "free" | "paid" | "enterprise";
  purchaseDate: string; // ISO date string
}

// Array of 10 hardcoded random orders
export const orders: Order[] = [
  {
    id: "1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p",
    price: 0,
    plan: "free",
    purchaseDate: "2023-01-15T10:23:45.000Z",
  },
  {
    id: "2b3c4d5e-6f7g8h9i-0j1k2l3m4n5o6p7q",
    price: 299.99,
    plan: "paid",
    purchaseDate: "2023-03-10T11:45:12.000Z",
  },
  {
    id: "3c4d5e6f-7g8h9i0j-1k2l3m4n5o6p7q8r",
    price: 499.99,
    plan: "enterprise",
    purchaseDate: "2023-05-22T14:32:56.000Z",
  },
  {
    id: "4d5e6f7g-8h9i0j1k-2l3m4n5o6p7q8r9s",
    price: 0,
    plan: "free",
    purchaseDate: "2023-07-02T08:15:33.000Z",
  },
  {
    id: "5e6f7g8h-9i0j1k2l-3m4n5o6p7q8r9s0t",
    price: 99.99,
    plan: "paid",
    purchaseDate: "2023-08-13T09:45:11.000Z",
  },
  {
    id: "6f7g8h9i-0j1k2l3m-4n5o6p7q8r9s0t1u",
    price: 0,
    plan: "free",
    purchaseDate: "2023-09-25T13:11:47.000Z",
  },
  {
    id: "7g8h9i0j-1k2l3m4n-5o6p7q8r9s0t1u2v",
    price: 199.99,
    plan: "paid",
    purchaseDate: "2023-10-05T16:25:22.000Z",
  },
  {
    id: "8h9i0j1k-2l3m4n5o-6p7q8r9s0t1u2v3w",
    price: 599.99,
    plan: "enterprise",
    purchaseDate: "2023-11-12T12:45:30.000Z",
  },
  {
    id: "9i0j1k2l-3m4n5o6p-7q8r9s0t1u2v3w4x",
    price: 0,
    plan: "free",
    purchaseDate: "2023-12-20T10:35:59.000Z",
  },
  {
    id: "0j1k2l3m-4n5o6p7q-8r9s0t1u2v3w4x5y",
    price: 399.99,
    plan: "enterprise",
    purchaseDate: "2023-01-30T17:55:18.000Z",
  },
];

// Define the interface for the objects
export interface Environments {
  id: number;
  name: string;
  FEATURE_DARK_MODE: boolean;
  FEATURE_GRAPHS: boolean;
  FEATURE_FORGE_V1: boolean;
}

// Create an array of 10 hardcoded objects
export const environments: Environments[] = [
  {
    id: 1,
    name: "User A",
    FEATURE_DARK_MODE: true,
    FEATURE_GRAPHS: false,
    FEATURE_FORGE_V1: true,
  },
  {
    id: 2,
    name: "User B",
    FEATURE_DARK_MODE: false,
    FEATURE_GRAPHS: true,
    FEATURE_FORGE_V1: true,
  },
  {
    id: 3,
    name: "User C",
    FEATURE_DARK_MODE: true,
    FEATURE_GRAPHS: true,
    FEATURE_FORGE_V1: false,
  },
  {
    id: 4,
    name: "User D",
    FEATURE_DARK_MODE: false,
    FEATURE_GRAPHS: false,
    FEATURE_FORGE_V1: true,
  },
  {
    id: 5,
    name: "User E",
    FEATURE_DARK_MODE: true,
    FEATURE_GRAPHS: false,
    FEATURE_FORGE_V1: true,
  },
  {
    id: 6,
    name: "User F",
    FEATURE_DARK_MODE: false,
    FEATURE_GRAPHS: true,
    FEATURE_FORGE_V1: false,
  },
  {
    id: 7,
    name: "User G",
    FEATURE_DARK_MODE: true,
    FEATURE_GRAPHS: true,
    FEATURE_FORGE_V1: true,
  },
  {
    id: 8,
    name: "User H",
    FEATURE_DARK_MODE: false,
    FEATURE_GRAPHS: true,
    FEATURE_FORGE_V1: true,
  },
  {
    id: 9,
    name: "User I",
    FEATURE_DARK_MODE: true,
    FEATURE_GRAPHS: false,
    FEATURE_FORGE_V1: false,
  },
  {
    id: 10,
    name: "User J",
    FEATURE_DARK_MODE: false,
    FEATURE_GRAPHS: false,
    FEATURE_FORGE_V1: true,
  },
];
