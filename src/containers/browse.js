import React, { useContext, useState, useEffect } from 'react';
import { SelectProfileContainer } from './profiles';
import { FirebaseContext } from '../context/firebase';
import { Loading, Header } from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';

export function BrowseContainer({ slides }) {
    const [searchTerm, setSearchTerm] = useState('');
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
            <Header.Frame>
                <Header.Group>
                    <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
                    <Header.TextLink>Series</Header.TextLink>
                    <Header.TextLink>Films</Header.TextLink>
                </Header.Group>
                <Header.Group>
                    <Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                    <Header.Profile>
                        <Header.Picture src={user.photoURL} />
                        <Header.Dropdown>
                            <Header.Group>
                                <Header.Picture src={user.photoURL} />
                                <Header.TextLink>{user.displayName}</Header.TextLink>
                            </Header.Group>
                            <Header.Group>
                                <Header.TextLink onClick={() => firebase.auth().signOut()}>Sign out</Header.TextLink>
                            </Header.Group>
                        </Header.Dropdown>
                    </Header.Profile>
                </Header.Group>
            </Header.Frame>

            <Header.Feature>
                <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
                <Header.Text>
                Arthur Fleck, a party clown, leads an impoverished life with his ailing mother. 
                However, when society shuns him and brands him as a freak, he decides to embrace the life of crime and chaos.
                </Header.Text>
                <Header.PlayButton>Play</Header.PlayButton>
            </Header.Feature>
        </Header>
        </>
    ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
    );
}