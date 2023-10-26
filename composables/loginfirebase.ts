import { signInWithEmailAndPassword, User} from 'firebase/auth'



export default function() {
    const { $auth } = useNuxtApp()
  
    const user = useState<User | null>("fb_user", () => null)
  
    const loginuser = async (email: string, password: string): Promise<boolean> => {
      try {
        const userCreds = await signInWithEmailAndPassword($auth, email, password)
        console.log(userCreds.user.auth.email, 'aman');
        if (userCreds) {
          user.value = userCreds.user
          return true
        }
      } catch (error: unknown) {
        if (error instanceof Error) {
          // handle error
        }
        return false
      }
      return false
    }
  
    return {
      user,
      loginuser
    }
  }