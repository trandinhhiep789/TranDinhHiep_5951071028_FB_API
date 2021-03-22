

import Axios from "axios";


export const testUtc = () => {
    return Axios.get(
        "https://graph.facebook.com/utc2hcmc/posts?access_token=EAAAAZAw4FxQIBAHefVFzh4p3toZCGD6QIBG5b7hZAutEx3dWl7MjxPEZBzC2LoLIy" +
        "K5YMaZAPBgXwUnKRTVfon2mpRDZC1yjDeOYv54hLzkYqRQHlOVNeJxkezxS4t2SMzlESz30F3ZBoTMhq4wLGFOSuPdu3ZAcsnLrMi4ytxo006iMRMTEtYCh"
    )
        .then((response) => {
            var output = [];
            for (let index = 0; index < 3; index++) {
                output +=
                    "<br>BÀI VIẾT SỐ " +
                    index +
                    "<br><br>" +
                    response.data.data[index].message;
            }
            document.getElementById("output").innerHTML = output;
        })
        .catch((error) => console.error(error));
};