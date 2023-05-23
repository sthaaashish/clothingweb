import { List, Typography, } from '@mui/material'
import React from 'react'

export default function PrivacyPolicy() {
    return (
        <div>
            <Typography variant='h2'>Privacy Policy</Typography>
            <Typography>This “Privacy Policy” describes the privacy practices of Fashion Nova, LLC., and our subsidiaries and affiliates (collectively, “Fashion Nova”, “we”, “us”, or “our”) in connection with the https://www.fashionnova.com/ website, the Fashion Nova mobile application, any other website or mobile application that we own or control and which posts or links to this Privacy Policy (the “Sites”) as well as our retail stores and related services (together with the Sites, the “Service”), and the rights and choices available to individuals with respect to their information.
                We provide important information for California residents in the NOTICE TO CALIFORNIA RESIDENTS section and for individuals in Europe in the NOTICE TO EUROPEAN USERS section below.</Typography>
            <Typography variant='h5'>Personal Information We Collect</Typography>
            <Typography>Personal information you provide to us. Personal information you may provide to us through the Service or otherwise includes:</Typography>
            <List>
            Contact data, personal or business contact information such as your first and last name, email and mailing addresses, phone number, professional title and company name.
            </List>
            <List>Registration data, such as information that you provide to register for an account or sign up for an event, including the day and month of your birth and the event you registered for.
            </List>
            <List>Data about others for whom you purchase an item or gift, such as name, delivery address and phone number. Please do not purchase a gift for someone or share their contact information with us unless you have their permission to do so.
            </List>
            <List>Profile data, such as your username and password that you may set to establish an online account with us and your interests and preferences
            </List>
            <Typography variant='h5'>Information we obtain from third party platforms.</Typography>
            <p>If you choose to login to the Sites via a third-party platform, such as Google or Facebook, or otherwise connect your account on the third-party platform or network to your account through the Sites, we may collect information from that platform or network. You may also have the opportunity to provide us with additional information via the third-party platform or network, such as a list of your friends or connections and your email address. You can read more about your privacy choices in the “Your Choices” section.
</p>
        </div>
    )
}
