import { contactSubmissions, trialRequests, type ContactSubmission, type InsertContactSubmission, type TrialRequest, type InsertTrialRequest } from "@shared/schema";

export interface IStorage {
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  createTrialRequest(request: InsertTrialRequest): Promise<TrialRequest>;
}

export class MemStorage implements IStorage {
  private contactSubmissions: Map<number, ContactSubmission>;
  private trialRequests: Map<number, TrialRequest>;
  private currentContactId: number;
  private currentTrialId: number;

  constructor() {
    this.contactSubmissions = new Map();
    this.trialRequests = new Map();
    this.currentContactId = 1;
    this.currentTrialId = 1;
  }

  async createContactSubmission(insertSubmission: InsertContactSubmission): Promise<ContactSubmission> {
    const id = this.currentContactId++;
    const submission: ContactSubmission = {
      ...insertSubmission,
      id,
      createdAt: new Date(),
    };
    this.contactSubmissions.set(id, submission);
    return submission;
  }

  async createTrialRequest(insertRequest: InsertTrialRequest): Promise<TrialRequest> {
    const id = this.currentTrialId++;
    const request: TrialRequest = {
      ...insertRequest,
      id,
      createdAt: new Date(),
    };
    this.trialRequests.set(id, request);
    return request;
  }
}

export const storage = new MemStorage();
