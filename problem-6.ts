{
  interface Profile {
    name: string;
    age: number;
    email: string;
  }
  const myProfile: Profile = {
    name: "Alice",
    age: 25,
    email: "alice@example.com",
  };

  const updateProfile = <T>(
    myProfile: T,
    updates: { name?: string; age?: number; email?: string }
  ): T => {
    return { ...myProfile, ...updates };
  };
  console.log(updateProfile(myProfile, { age: 26 }));
}
