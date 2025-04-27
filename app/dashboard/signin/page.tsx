import { redirect } from 'next/navigation';
import { getDefaultSignInView } from '@/utils/auth-helpers/settings';
import { cookies } from 'next/headers';

export default async function SignIn() {
  const cookiesList = await cookies();
  const preferredSignInView = cookiesList.get('preferredSignInView')?.value || null;
  const defaultView = getDefaultSignInView(preferredSignInView);

  return redirect(`/dashboard/signin/${defaultView}`);
}
