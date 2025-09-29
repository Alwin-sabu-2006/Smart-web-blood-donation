import { User, PatientRequest, BloodBank, BloodGroup, Role, VerificationStatus, DonationRequest } from './types';

export const KERALA_DISTRICTS = [
  'Thiruvananthapuram',
  'Kollam',
  'Pathanamthitta',
  'Alappuzha',
  'Kottayam',
  'Idukki',
  'Ernakulam',
  'Thrissur',
  'Palakkad',
  'Malappuram',
  'Kozhikode',
  'Wayanad',
  'Kannur',
  'Kasaragod',
];

export const PRIMARY_ADMIN_EMAIL = 'alwinsabu540@gmail.com';

export const MOCK_USERS: User[] = [
  { id: 'u1', name: 'Arun Kumar', email: 'arun.k@example.com', role: Role.Donor, city: 'Thiruvananthapuram', bloodGroup: BloodGroup.APositive, isAvailable: true, verificationStatus: VerificationStatus.Verified, contact: '123-456-7890', dob: '1990-05-15', lastDonationDate: '2024-06-01' },
  { id: 'u2', name: 'Priya Nair', email: 'priya.n@example.com', role: Role.Donor, city: 'Ernakulam', bloodGroup: BloodGroup.ONegative, isAvailable: true, verificationStatus: VerificationStatus.Pending, idDocumentUrl: '/mock-id.pdf', contact: '123-456-7891', dob: '1988-11-20', lastDonationDate: '2024-03-01' },
  { id: 'u3', name: 'Sandeep Menon', email: 'sandeep.m@example.com', role: Role.Donor, city: 'Kozhikode', bloodGroup: BloodGroup.BPositive, isAvailable: false, verificationStatus: VerificationStatus.Verified, contact: '123-456-7892', dob: '1995-02-10' },
  { id: 'u4', name: 'Anjali Varma', email: 'anjali.v@example.com', role: Role.Donor, city: 'Thiruvananthapuram', bloodGroup: BloodGroup.ABPositive, isAvailable: true, verificationStatus: VerificationStatus.NotVerified, contact: '123-456-7893', dob: '1992-08-30' },
  { id: 'u5', name: 'David John', email: 'david.j@example.com', role: Role.Patient, city: 'Thrissur', bloodGroup: BloodGroup.APositive, dob: '1985-07-22', verificationStatus: VerificationStatus.NotVerified },
  { id: 'u6', name: 'Alwin Sabu', email: PRIMARY_ADMIN_EMAIL, role: Role.Admin, city: 'Ernakulam', bloodGroup: BloodGroup.OPositive, verificationStatus: VerificationStatus.Verified, dob: '1980-01-01' },
];

export const MOCK_REQUESTS: PatientRequest[] = [
  { id: 'r1', requesterId: 'u5', patientName: 'Michael Clark', bloodGroup: BloodGroup.APositive, hospitalName: 'KIMS Hospital', city: 'Thiruvananthapuram', urgency: 'URGENT', contactPerson: 'Sarah Clark', postedAt: new Date(Date.now() - 3600 * 1000 * 2).toISOString() },
  { id: 'r2', requesterId: 'u5', patientName: 'Linda Rodriguez', bloodGroup: BloodGroup.ONegative, hospitalName: 'Lakeshore Hospital', city: 'Ernakulam', urgency: 'HIGH', contactPerson: 'Carlos Rodriguez', postedAt: new Date(Date.now() - 3600 * 1000 * 5).toISOString() },
  { id: 'r3', requesterId: 'u5', patientName: 'James Wilson', bloodGroup: BloodGroup.BPositive, hospitalName: 'Baby Memorial Hospital', city: 'Kozhikode', urgency: 'MEDIUM', contactPerson: 'Emily Wilson', postedAt: new Date(Date.now() - 3600 * 1000 * 24).toISOString() },
];

export const MOCK_BLOOD_BANKS: BloodBank[] = [
  { id: 'bb1', name: 'IMA Blood Bank', city: 'Thiruvananthapuram', stock: { [BloodGroup.APositive]: 25, [BloodGroup.ANegative]: 10, [BloodGroup.BPositive]: 18, [BloodGroup.BNegative]: 5, [BloodGroup.ABPositive]: 8, [BloodGroup.ABNegative]: 3, [BloodGroup.OPositive]: 40, [BloodGroup.ONegative]: 15 } },
  { id: 'bb2', name: 'Amrita Hospital Blood Bank', city: 'Ernakulam', stock: { [BloodGroup.APositive]: 30, [BloodGroup.ANegative]: 12, [BloodGroup.BPositive]: 22, [BloodGroup.BNegative]: 7, [BloodGroup.ABPositive]: 10, [BloodGroup.ABNegative]: 4, [BloodGroup.OPositive]: 55, [BloodGroup.ONegative]: 20 } },
  { id: 'bb3', name: 'Malabar Cancer Centre Blood Bank', city: 'Kannur', stock: { [BloodGroup.APositive]: 20, [BloodGroup.ANegative]: 8, [BloodGroup.BPositive]: 15, [BloodGroup.BNegative]: 4, [BloodGroup.ABPositive]: 6, [BloodGroup.ABNegative]: 2, [BloodGroup.OPositive]: 35, [BloodGroup.ONegative]: 12 } },
];

export const MOCK_DONATION_REQUESTS: DonationRequest[] = [];

export const BLOOD_GROUPS: BloodGroup[] = Object.values(BloodGroup);