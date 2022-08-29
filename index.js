let cand = {
  candidates: [
    {
      id: 'e7056569-f621-44f4-8275-45fe1ac5e810',
      email: '3smiley@cmdq.co.za',
      firstName: 'Thabang',
      lastName: 'Rabapane',
      mobileNumber: '0812077616',
      dateOfBirth: null,
      gender: null,
      race: null,
      homeLanguage: null,
      status: 'ACTIVE',
      nationality: null,
      country: null,
      region: null,
      city: null,
    },
    {
      id: '7bce6a39-bca5-4483-8b3b-e14c91be32aa',
      email: 'williammabotjadev@gmail.com',
      firstName: 'William',
      lastName: 'Mabotja',
      mobileNumber: '0826692954',
      dateOfBirth: null,
      gender: null,
      race: null,
      homeLanguage: null,
      status: 'ACTIVE',
      nationality: null,
      country: null,
      region: null,
      city: null,
    },
    {
      id: '5c399c2b-3f59-4c5a-aeea-c6d3a40f3f93',
      email: 'william@wamly.io',
      firstName: 'Wizba',
      lastName: 'Uch',
      mobileNumber: '691129955',
      dateOfBirth: null,
      gender: null,
      race: null,
      homeLanguage: null,
      status: 'ACTIVE',
      nationality: null,
      country: null,
      region: null,
      city: null,
    },
    {
      id: 'c32b15e3-22e2-4154-af6e-537ac66418f9',
      email: 'wpwiredin@gmail.com',
      firstName: 'Senamela',
      lastName: 'Mabotja',
      mobileNumber: '0826692954',
      dateOfBirth: null,
      gender: null,
      race: null,
      homeLanguage: null,
      status: 'ACTIVE',
      nationality: null,
      country: null,
      region: null,
      city: null,
    },
    {
      id: 'f5ef9890-936b-441e-a170-bed0ab09966c',
      email: 'tlebeya57@gmail.com',
      firstName: 'Thabang',
      lastName: 'Rabapane',
      mobileNumber: '0812077616',
      dateOfBirth: null,
      gender: null,
      race: null,
      homeLanguage: null,
      status: 'ACTIVE',
      nationality: null,
      country: null,
      region: null,
      city: null,
    },
    {
      id: '7c6a5ccc-a3fb-4444-949f-83a69c3fdb5e',
      email: '123@gmail.com',
      firstName: '123',
      lastName: '123',
      mobileNumber: '727533563',
      dateOfBirth: null,
      gender: null,
      race: null,
      homeLanguage: null,
      status: 'ACTIVE',
      nationality: null,
      country: null,
      region: null,
      city: null,
    },
    {
      id: '8df176ef-2641-454b-9e41-b8f7c8dd5f61',
      email: 'Rosettamacuacua@yahoo.com',
      firstName: 'Rosetta',
      lastName: 'Macuacua',
      mobileNumber: '128373829',
      dateOfBirth: null,
      gender: null,
      race: null,
      homeLanguage: null,
      status: 'ACTIVE',
      nationality: null,
      country: null,
      region: null,
      city: null,
    },
    {
      id: '38be5873-eb0b-4d8d-921f-7d2a1377251e',
      email: '5smiley@cmdq.co.za',
      firstName: 'Thabang',
      lastName: 'Rabapane',
      mobileNumber: '',
      dateOfBirth: null,
      gender: null,
      race: null,
      homeLanguage: null,
      status: 'ACTIVE',
      nationality: null,
      country: null,
      region: null,
      city: null,
    },
    {
      email: 'william@wamly.io',
      firstName: 'Wizba',
      lastName: 'Uch',
      mobileNumber: '691129955',
    },
    {
      email: '123@gmail.com',
      firstName: '123',
      lastName: '123',
      mobileNumber: '727533563',
    },
  ],
  projectId: 'feb3b691-9153-428b-b487-e79bc48411fb',
  organizationId: '5a5c5357-672a-49ba-8be2-8f980b8b4d69',
};

let candidate = [...cand.candidates];

const getDudplicates = (can) => {
  let emails = can.map((val) => val.email);

  let $emails = [...new Set(emails)];

  let counter = new Array($emails.length).fill(0);

  let duplicates = [];

  $emails.forEach((val, index) => {
    emails.forEach((val2) => {
      if (val2 === val) {
        ++counter[index];
      }
    });
  });

  duplicates = counter
    .map((c, index) => {
      if (c > 1) {
        return candidate[index];
      }
    })
    .filter((val) => val);

  return duplicates;
};

const missingFields = (can) => {
  let errors = [];
  const checksFor = ['email', 'firstName', 'lastName', 'mobileNumber'];
  let $candidates = [...can];

  $candidates.forEach((cand, index) => {
    let er = {};
    let pushit = false;
    checksFor.forEach((checks, index) => {
      if (cand[checks] === '') {
        console.log(cand[checks]);
        er[checks] = `${checks} cannot be empty`;

        pushit = true;
      }
    });

    if (pushit) {
      er['index'] = index;
      er['candidate'] = cand;
      errors.push(er);
    }
  });

  return errors;
};
console.log(getDudplicates(candidate));

console.log(missingFields(candidate));
