import { DetailsComponent } from './componet/details/details.component';
import { FormComponent } from './componet/form/form.component';
import { HomeComponent } from './componet/home/home.component';
import { NavComponent } from './componet/nav/nav.component';
import { AboutComponent } from './componet/about/about.component';
import { ViewComponent } from './componet/view/view.component';
import { ContactComponent } from './componet/contact/contact.component';
import { ReviewinfoComponent } from './componet/reviewinfo/reviewinfo.component';

export const AppRoutes = [
    {path: '', component: DetailsComponent},
    {path: 'reviewinfo', component: ReviewinfoComponent},
    {path: 'Home', component: HomeComponent, children:
        [
           
            {path: 'form', component: FormComponent},
            {path: 'nav', component: NavComponent},
            {path: 'About', component: AboutComponent},
            {path: 'Contact', component: ContactComponent},
            {path: '', component: ViewComponent}
        ]
    }
];