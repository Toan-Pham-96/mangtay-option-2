  // Create a function to change
    // the hash value of the page
    function changeLanguage(lang) {
        location.hash = lang;
        location.reload();
      }
    
      // Define the language reload anchors
      var language = {
        eng: {
          //MENU
          about: 'About us',
          functions: 'Function',
          product: 'Product',
          pricing: 'Pricing',

          //button
          register: 'Register now',
          support: 'Support now',
          read_more: 'Read more',


          //BANNER
          sub_banner:'All-in-one gym membership management software for gyms and health clubs of all sizes.',
          heading_banner_sub: 'Gym file management software',
          heading_banner_main: 'smart and convenient',

          //utilities
          //utilities_1
          utilities_1: 'Self service',
          utilities_des_1: 'Empowerment to check settlement club members' 
           + ' premium fitness software solutions for self-service',
           list_ul_1_1: 'Online booking and registration',
           des_list_ul_1_1: 'Make online booking convenient for your fitness club members. Our Client Portal integrates with your website to streamline all personal training, fitness facility, and class bookings on any device. Members can also manage all aspects of their accounts including registration, contract renewals, payments, and more.',
           list_ul_1_2: 'Sales counter',
           des_list_ul_1_2: 'Alleviate pressure on your reception desk with a club kiosk capable of handling club membership management and registration at your facility. A great solution for clubs with 24/7 access controls for client acquisition at any time',
           list_ul_1_3: 'Mobile app',
           des_list_ul_1_3: 'Existing gym members can book classes and refer friends or family at any time. Additionally, new members can download your gym\'s mobile app, sign-up, or find your other clubs at any time with our club finder feature.',
          
          //utilities_2
          utilities_2: 'Increase customer retention rate',
          utilities_des_2: 'With our advanced analytics and reporting you have can increase retention rate at your gym and keep Let your members focus on athletic performance their education.',
           list_ul_2_1: 'Intelligence in customer retention',
           des_list_ul_2_1: 'Make online booking convenient for your fitness club members. Our Client Portal integrates with your website to streamline all personal training, fitness facility, and class bookings on any device. Members can also manage all aspects of their accounts including registration, contract renewals, payments, and more.',
           list_ul_2_2: 'Recurring payments',
           des_list_ul_2_2: 'Alleviate pressure on your reception desk with a club kiosk capable of handling club membership management and registration at your facility. A great solution for clubs with 24/7 access controls for client acquisition at any time',
           list_ul_2_3: 'The automatic',
           des_list_ul_2_3: 'Existing gym members can book classes and refer friends or family at any time. Additionally, new members can download your gym\'s mobile app, sign-up, or find your other clubs at any time with our club finder feature.',

          //utilities_3
          utilities_3: 'Sales & Marketing',
          utilities_des_3: 'Increase sales and marketing performance for your fitness club with a platform designed to increase club member acquisition rates.',
          list_ul_3_1: 'Point of sale system',
          des_list_ul_3_1: 'Make online booking convenient for your fitness club members. Our Client Portal integrates with your website to streamline all personal training, fitness facility, and class bookings on any device. Members can also manage all aspects of their accounts including registration, contract renewals, payments, and more.',
          list_ul_3_2: 'Recommended tool',
          des_list_ul_3_2: 'Alleviate pressure on your reception desk with a club kiosk capable of handling club membership management and registration at your facility. A great solution for clubs with 24/7 access controls for client acquisition at any time',
          list_ul_3_3: 'CRM',
          des_list_ul_3_3: 'Existing gym members can book classes and refer friends or family at any time. Additionally, new members can download your gym\'s mobile app, sign-up, or find your other clubs at any time with our club finder feature.',

           //utilities_4
           utilities_4: 'Activity',
           utilities_des_4: 'Health club management software solutions and Our fitness is tailored to help you run all operational aspects of the club easily.',
           list_ul_4_1: 'Dashboards & Reports',
           des_list_ul_4_1: 'Make online booking convenient for your fitness club members. Our Client Portal integrates with your website to streamline all personal training, fitness facility, and class bookings on any device. Members can also manage all aspects of their accounts including registration, contract renewals, payments, and more.',
           list_ul_4_2: 'Fitness integration',
           des_list_ul_4_2: 'Alleviate pressure on your reception desk with a club kiosk capable of handling club membership management and registration at your facility. A great solution for clubs with 24/7 access controls for client acquisition at any time',
           list_ul_4_3: 'Employee manager',
           des_list_ul_4_3: 'Existing gym members can book classes and refer friends or family at any time. Additionally, new members can download your gym\'s mobile app, sign-up, or find your other clubs at any time with our club finder feature.',
          
          //feature
          features: 'Features of App',
          features_title_1: 'Gym Vision by brand',
          features_des_1:'The business owns its own customer care app, with all the features of earning points, incentives, and pushing messages...',
          features_title_2: 'Gym Vision by brand',
          features_des_2:'The business owns its own customer care app, with all the features of earning points, incentives, and pushing messages...',
          features_title_3: 'Gym Vision by brand',
          features_des_3:'The business owns its own customer care app, with all the features of earning points, incentives, and pushing messages...',
          features_title_4: 'Gym Vision by brand',
          features_des_4:'The business owns its own customer care app, with all the features of earning points, incentives, and pushing messages...',

          //case study

          case_study: 'Case study',

          //FOOTER
          contact: 'Contact',
          address: 'Address: 546 Le Van Luong, District 7, Ho Chi Minh City',
          hotline: 'Hotline: 1900 63 69 20',
          gmail: 'Email: cskh@thenewgym.vn',
          about_us: 'About us',
          enterprise: 'Enterprise',
          policy: 'Policy',
          terms_condition: 'Terms and condition',
          privacy_policy: 'Privacy Policy',
          rules: 'Usage rules',




        },
      
      };
    
      // Check if a hash value exists in the URL
      if (window.location.hash) {
    
        // Set the content of the webpage 
        // depending on the hash value
        if (window.location.hash == "#eng") {

          //MENU
          about.textContent = language.eng.about;
          functions.textContent = language.eng.functions;
          product.textContent = language.eng.product;
          pricing.textContent = language.eng.pricing;

          //button
          register.textContent = language.eng.register;
          support.textContent = language.eng.support;
          read_more.textContent = language.eng.read_more;


          //BANNER
          sub_banner.textContent = language.eng.sub_banner;
          heading_banner_sub.textContent = language.eng.heading_banner_sub;
          heading_banner_main.textContent = language.eng.heading_banner_main;

          //utilities 1
          utilities_1.textContent = language.eng.utilities_1;
          utilities_des_1.textContent = language.eng.utilities_des_1;
          list_ul_1_1.textContent = language.eng.list_ul_1_1;
          list_ul_1_2.textContent = language.eng.list_ul_1_2;
          list_ul_1_3.textContent = language.eng.list_ul_1_3;

          //utilities 2
          utilities_2.textContent = language.eng.utilities_2;
          utilities_des_2.textContent = language.eng.utilities_des_2;
          list_ul_2_1.textContent = language.eng.list_ul_2_1;
          list_ul_2_2.textContent = language.eng.list_ul_2_2;
          list_ul_2_3.textContent = language.eng.list_ul_2_3;

          //utilities 3
          utilities_3.textContent = language.eng.utilities_3;
          utilities_des_3.textContent = language.eng.utilities_des_3;
          list_ul_3_1.textContent = language.eng.list_ul_3_1;
          list_ul_3_2.textContent = language.eng.list_ul_3_2;
          list_ul_3_3.textContent = language.eng.list_ul_3_3;

           //utilities 4
           utilities_4.textContent = language.eng.utilities_4;
           utilities_des_4.textContent = language.eng.utilities_des_4;
           list_ul_4_1.textContent = language.eng.list_ul_4_1;
           list_ul_4_2.textContent = language.eng.list_ul_4_2;
           list_ul_4_3.textContent = language.eng.list_ul_4_3;

          //features
          features.textContent = language.eng.features;

          features_title_1.textContent = language.eng.features_title_1;
          features_des_1.textContent = language.eng.features_des_1;
          features_title_2.textContent = language.eng.features_title_2;
          features_des_2.textContent = language.eng.features_des_2;
          features_title_3.textContent = language.eng.features_title_3;
          features_des_3.textContent = language.eng.features_des_3;
          features_title_4.textContent = language.eng.features_title_4;
          features_des_4.textContent = language.eng.features_des_4;

          //case study
          case_study.textContent = language.eng.case_study;

          //footer
          contact.textContent = language.eng.contact;
          address.textContent = language.eng.address;
        gmail.textContent = language.eng.gmail;

          about_us.textContent = language.eng.about_us;

          enterprise.textContent = language.eng.enterprise;
          policy.textContent = language.eng.policy;
          terms_condition.textContent = language.eng.terms_condition;
          privacy_policy.textContent = language.eng.privacy_policy;
          rules.textContent = language.eng.rules;

        }
        // else if (window.location.hash == "#eng") {
        //   siteContent.textContent = language.eng.welcome;
        //   siteContent2.textContent = language.eng.test;

        // }
      }
