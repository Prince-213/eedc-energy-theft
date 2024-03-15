import type { PageServerLoad } from './$types';
import { faker } from '@faker-js/faker';
import { fail } from "@sveltejs/kit";
import { supabase } from "$lib/supabaseClient.js";

export const load = (async ({ fetch }) => {

    
    
    let { data, error } = await supabase
    .from('customers')
    .select('*')
    
    
    let two = (await supabase
    .from('customers')
    .select("data, calls, revenue, sms")
    .eq('network', '2G')).data

    let three = (await supabase
        .from('customers')
        .select("data, calls, revenue, sms")
        .eq('network', '3G')).data

    let four = (await supabase
        .from('customers')
        .select("data, calls, revenue, sms")
        .eq('network', '4G')).data

    let five = (await supabase
        .from('customers')
        .select("data, calls, revenue, sms")
        .eq('network', '5G')).data
    
    let suspect = ['john', 'ken']   
    
    let non_suspect = ['john', 'ken', 'troy'] 
        
    
    // Function to convert the format
    type Payments = {
        name: string
        meter: string
        january: number
        febuary: number
        march: number
        april: number        
        may: number
        june : number
        july : number
        august : number
        september : number
        october: number
        november: number
        december: number
        address : string
        status : string
        graph: number[]
    }[];
    
    let response = await fetch("/api/payments");
    let brief: Payments = await response.json();    
    

    return {
        data: data ?? [],
        two: two ?? [],
        three: three ?? [],
        four: four ?? [],
        five: five ?? [],
        suspect: suspect ?? [],
        non_suspect: non_suspect ?? [],
        brief: brief ?? []
    };
}) satisfies PageServerLoad;