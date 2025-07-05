import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema, insertTrialRequestSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      
      // Store the submission
      const submission = await storage.createContactSubmission(validatedData);
      
      // In a real implementation, you would send an email here
      // For now, we'll just log it (the frontend will show success)
      console.log("Contact form submission to be sent to benikenna0@gmail.com:", {
        ...validatedData,
        submissionId: submission.id,
        timestamp: submission.createdAt
      });
      
      res.json({ 
        success: true, 
        message: "Contact form submitted successfully",
        submissionId: submission.id 
      });
      
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid form data", 
          errors: error.errors 
        });
      } else {
        console.error("Contact form error:", error);
        res.status(500).json({ 
          success: false, 
          message: "Failed to submit contact form" 
        });
      }
    }
  });

  // Trial lesson request submission
  app.post("/api/trial-request", async (req, res) => {
    try {
      const validatedData = insertTrialRequestSchema.parse(req.body);
      
      // Store the trial request
      const request = await storage.createTrialRequest(validatedData);
      
      // In a real implementation, you would send an email here
      // For now, we'll just log it (the frontend will show success)
      console.log("Trial lesson request to be sent to benikenna0@gmail.com:", {
        ...validatedData,
        requestId: request.id,
        timestamp: request.createdAt
      });
      
      res.json({ 
        success: true, 
        message: "Trial lesson request submitted successfully",
        requestId: request.id 
      });
      
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid form data", 
          errors: error.errors 
        });
      } else {
        console.error("Trial request error:", error);
        res.status(500).json({ 
          success: false, 
          message: "Failed to submit trial request" 
        });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
