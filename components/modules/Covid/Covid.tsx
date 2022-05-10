import * as React from "react";
import Link from 'next/link'
import styles from "./Covid.module.scss";

type TCovid = {
    id: number;
    name_ja: string;
    name_en: string;
    cases: number;
    deaths: number;
};
type TCData = TCovid | null;

function Covid() {
    const [dataCovid,setCovidData] = React.useState<TCData>(null)
    
    const apiCovidUrl = "https://covid19-japan-web-api.vercel.app/api/v1/prefectures";

    React.useEffect(() => {
        async function fetchCovidJSON() {
          try {
              const responseCovid = await fetch(apiCovidUrl);
              const covidposts : TCovid = await responseCovid.json();
              
              setCovidData(covidposts);
          } catch (error) {
              //console.error(error);
          }
    
        }
        fetchCovidJSON();
        //For blog pages
    },[])
    console.log(dataCovid);
    console.log(typeof dataCovid)

    const result = dataCovid
    ? dataCovid[22].cases
    : "";
    console.log(result)

    
    //const result = dataCovid.filter(obj => obj)

      //console.log(result);


    return (
      
        <div className={styles.Covid}>
            
            <p>There are <b>{result}</b> Covid 19 cases at Aichi. </p>
        </div>
  
      
    )
  }
export { Covid };
