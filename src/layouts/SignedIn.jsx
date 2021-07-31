import React from 'react'
import { Dropdown, Menu ,Image} from 'semantic-ui-react'

export default function SignedIn(signOut) {
    return (
        <div>
            <Menu.Item> 
                <Image avatar spaced="right" src=""/>
                <Dropdown pointing="top left" text="Dilan">
                <Dropdown.Menu>
                    <Dropdown.Item text="Bilgilerim" icon="info" />
                    <Dropdown.Item onClick={signOut} text="Çıkış yap" icon="signed-out"/>
                </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
