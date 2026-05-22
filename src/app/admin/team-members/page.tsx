import type { Metadata } from 'next';
import TeamMembersCMS from '@/components/admin/team/TeamMembersCMS';
export const metadata: Metadata = { title: 'Team Members' };
export default function TeamMembersPage() { return <TeamMembersCMS />; }
