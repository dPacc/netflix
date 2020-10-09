import React, { useContext, useState, useEffect } from 'react';
import { SelectProfileContainer } from './profiles';
import { FirebaseContext } from '../context/firebase';
import { Loading, Header } from '../components';

export function BrowseContainer({ slides }) {
    const [profile, setProfile] = useState({});
    const [loading, setloading] = useState(true);
    const { firebase } = useContext(FirebaseContext);
    const user = firebase.auth().currentUser || {};

    useEffect(() => {
        setTimeout(() => {
            setloading(false);
        }, 3000)
    }, [profile.displayName])

    return profile.displayName ? (
        <>
        {loading ? <Loading src={user.photoURL} /> : ( <Loading.ReleaseBody /> )}
        <Header src="joker1">
            <Header.Feature>
                <Header.Text>Hello</Header.Text>
            </Header.Feature>
        </Header>
        </>
    ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
    );
}