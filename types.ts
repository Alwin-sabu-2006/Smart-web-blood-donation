export enum BloodGroup {
  APositive = 'A+',
  ANegative = 'A-',
  BPositive = 'B+',
  BNegative = 'B-',
  ABPositive = 'AB+',
  ABNegative = 'AB-',
  OPositive = 'O+',
  ONegative = 'O-',
}

export enum Role {
  Donor = 'DONOR',
  Patient = 'PATIENT',
  Admin = 'ADMIN',
}

export enum VerificationStatus {
  NotVerified = 'NOT_VERIFIED',
  Pending = 'PENDING',
  Verified = 'VERIFIED',
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  city: string;
  bloodGroup: BloodGroup;
  contact?: string;
  isAvailable?: boolean;
  verificationStatus: VerificationStatus;
  idDocumentUrl?: string;
  dob?: string;
  lastDonationDate?: string;
  adminAccessRequestStatus?: 'PENDING';
}

export interface PatientRequest {
  id: string;
  requesterId: string;
  patientName: string;
  bloodGroup: BloodGroup;
  hospitalName: string;
  city: string;
  urgency: 'URGENT' | 'HIGH' | 'MEDIUM' | 'LOW';
  contactPerson: string;
  postedAt: string;
}

export interface BloodBank {
  id: string;
  name: string;
  city: string;
  stock: Record<BloodGroup, number>;
}

export interface DonationRequest {
    id: string;
    requesterId: string;
    donorId: string;
    status: 'REQUESTED' | 'SCHEDULED' | 'COMPLETED' | 'CANCELLED';
    scheduledDateTime?: string;
    createdAt: string;
}

export interface Notification {
  id: string;
  recipientId: string;
  senderId: string;
  subject: string;
  message: string;
  createdAt: string;
  read: boolean;
}