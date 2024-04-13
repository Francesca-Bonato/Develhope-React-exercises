/* 
- Modify the useGithubUser custom hook from the Custom Hooks 3 exercise to use the useSWR hook to fetch the data of a Github user. 
- Modify the useGithubUser hook so that, if the username is null, no request is made.
*/

import useSWR from "swr";

//Non sono sicura che si possa utilizzare in modo condizionale un hook come ho fatto per risolvere l'esercizio.
//Tuttavia, la consegna richiede di modificare useGithubUser e non gli altri componenti, e questo è l'unico modo che mi è venuto in mente.
//Avrei preferito mettere un controllo sull'input in GithubUsers (che infatti avevo messo e ora ho commentato) per evitare di settare il parametro username a stringa vuota.

export function useGithubUser(username) {
  if (username) {
    const { data, error, mutate } = useSWR(
      `https://api.github.com/users/${username}`
    );

    return {
      userdata: data,
      error,
      loading: !data && !error,
      onFetchUser: () => mutate(),
    };
  } else {
    return {
      userdata: null,
      error: null,
      loading: null,
      onFetchUser: () => {},
    };
  }
}
