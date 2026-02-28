import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-b84cc350/health", (c) => {
  return c.json({ status: "ok" });
});

// Demo request endpoint - saves user demo requests
app.post("/make-server-b84cc350/demo-request", async (c) => {
  try {
    const body = await c.req.json();
    const { name, email, company, message } = body;

    // Validate required fields
    if (!name || !email || !company) {
      return c.json(
        { success: false, error: "Name, email, and company are required" },
        400
      );
    }

    // Generate unique ID with timestamp
    const timestamp = new Date().toISOString();
    const id = `demo_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

    // Store demo request
    const demoData = {
      id,
      name,
      email,
      company,
      message: message || "",
      timestamp,
      status: "pending"
    };

    await kv.set(id, demoData);

    console.log(`Demo request saved successfully: ${id} for ${email}`);

    return c.json({
      success: true,
      message: "Demo request submitted successfully",
      requestId: id
    });
  } catch (error) {
    console.error("Error saving demo request:", error);
    return c.json(
      {
        success: false,
        error: `Failed to save demo request: ${error.message}`
      },
      500
    );
  }
});

// Get all demo requests (for admin viewing)
app.get("/make-server-b84cc350/demo-requests", async (c) => {
  try {
    const requests = await kv.getByPrefix("demo_");
    return c.json({
      success: true,
      count: requests.length,
      requests: requests.sort((a, b) => 
        new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
      )
    });
  } catch (error) {
    console.error("Error fetching demo requests:", error);
    return c.json(
      {
        success: false,
        error: `Failed to fetch demo requests: ${error.message}`
      },
      500
    );
  }
});

// Contact/Newsletter signup endpoint
app.post("/make-server-b84cc350/contact", async (c) => {
  try {
    const body = await c.req.json();
    const { email, type = "contact" } = body; // type can be 'contact' or 'newsletter'

    if (!email) {
      return c.json(
        { success: false, error: "Email is required" },
        400
      );
    }

    const timestamp = new Date().toISOString();
    const id = `contact_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

    const contactData = {
      id,
      email,
      type,
      timestamp
    };

    await kv.set(id, contactData);

    console.log(`Contact submission saved successfully: ${id} for ${email}`);

    return c.json({
      success: true,
      message: "Thank you for your interest!",
      subscriptionId: id
    });
  } catch (error) {
    console.error("Error saving contact:", error);
    return c.json(
      {
        success: false,
        error: `Failed to save contact: ${error.message}`
      },
      500
    );
  }
});

Deno.serve(app.fetch);