// import {LoaderFunctionArgs} from "react-router";
// import {getTripById} from "~/appwrite/trips";
// import type { Route } from './+types/trips-detail';
// import {parseTripData} from "~/lib/utils";
// import {Header} from "../../../components";
//
// export const loader = async ({ params}: LoaderFunctionArgs) => {
//     const { tripId } = params;
//
//     if (!tripId) throw new Error('Trip id is required');
//
//     const trip = await getTripById(tripId);
//
//     return trip;
// }
//
// const TripDetail = ({ loaderData }: Route.ComponentProps) => {
//     const tripData = parseTripData(loaderData?.tripDetails);
//
//     const { name } = tripData || {};
//
//     return (
//         <main className="travel-detail wrapper">
//             <Header title="Trip Details" description="View and edit AI-generated travel plans"/>
//
//             <section className="container wrapper-md">
//                 <header>
//                     <h1 className="p-40-semibold text-dark-100">{name}</h1>
//                 </header>
//             </section>
//         </main>
//     )
// }
// export default TripDetail
