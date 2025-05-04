import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase-client";

const FeedProtected = ({ children }: { children: React.ReactNode }) => {
  const [session, setSession] = useState<Boolean | null>(true); // Set default to true for production
  const [loading, setLoading] = useState(false); // Set initial loading to false
  const navigate = useNavigate();

  useEffect(() => {
    // In production, we'll always allow access
    setSession(true);
    setLoading(false);

    // Keep subscription for future auth implementation
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(true);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  // Always render children in production
  return <>{children}</>;
};

export default FeedProtected;
