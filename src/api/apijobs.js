import { SupabaseClient } from "@supabase/supabase-js";

export async function getJobs(token,{}){
    const supabase = await SupabaseClient(token);
    let query = supabase.from("jobs").select("*");

    const {data,error} = await query;

    if(error){
        console.log("Error fetching the jobs : ",error);
        return null;
        
    }

    return data;
}