"use client";

import {
	Button,
	Checkbox,
	Input,
	Label,
	RadioGroup,
	RadioGroupItem,
	Textarea,
} from "@relume_io/relume-ui";
import { useState } from "react";

// TODO: Implement zod form validation and setup form provider

export const QuoteForm = () => {
	const [firstNameInput, setFirstNameInput] = useState("");
	const [lastNameInput, setLastNameInput] = useState("");

	const [emailInput, setEmailInput] = useState("");
	const [phoneInput, setPhoneInput] = useState("");

	const [selectedRadio, setSelectedRadio] = useState("");

	const [streetInput, setStreetInput] = useState("");
	const [apartmentInput, setApartmentInput] = useState("");

	const [cityInput, setCityInput] = useState("");
	const [postalCodeInput, setPostalCodeInput] = useState("");

	const [messageInput, setMessageInput] = useState("");
	const [acceptTerms, setAcceptTerms] = useState<boolean | "indeterminate">(false);

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log({
			firstNameInput,
			lastNameInput,
			emailInput,
			phoneInput,

			selectedRadio,
			messageInput,
			acceptTerms,
		});
	};

	const radioItems = [
		{ value: "vinduespolering", label: "Vinduespolering" },
		{ value: "solcellevask", label: "Solcellevask" },
		{ value: "fliserens", label: "Fliserens" },
		{ value: "algebehandeling", label: "Algebehandeling" },
		{ value: "rens-of-tagrender", label: "Rens of tagrender" },
		{ value: "erhvervsrengoring", label: "Erhvervsrengøring" },
	];

	return (
		<section id="relume" className="px-[5%] py-8 md:py-12 lg:py-14">
			<div className="shadow-sm container max-w-lg rounded-lg bg-white p-8 ring-1 ring-black/5 xl:p-12">
				<form className="grid grid-cols-1 grid-rows-[auto_auto] gap-6" onSubmit={handleSubmit}>
					<div className="grid grid-cols-2 gap-6">
						<div className="grid w-full items-center">
							<Label htmlFor="firstName" className="mb-2">
								Fornavn <span className="text-red-500">&#42;</span>
							</Label>
							<Input
								type="text"
								id="firstName"
								required
								value={firstNameInput}
								onChange={(e) => setFirstNameInput(e.target.value)}
								className="shadow-sm rounded-md border-none ring-1 ring-black/10"
							/>
						</div>

						<div className="grid w-full items-center">
							<Label htmlFor="lastName" className="mb-2">
								Efternavn <span className="text-red-500">&#42;</span>
							</Label>
							<Input
								type="text"
								id="lastName"
								value={lastNameInput}
								onChange={(e) => setLastNameInput(e.target.value)}
								className="shadow-sm rounded-md border-none ring-1 ring-black/10"
							/>
						</div>
					</div>

					<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
						<div className="grid w-full items-center">
							<Label htmlFor="email" className="mb-2">
								E-mailadresse <span className="text-red-500">&#42;</span>
							</Label>
							<Input
								type="email"
								id="email"
								value={emailInput}
								onChange={(e) => setEmailInput(e.target.value)}
								className="shadow-sm rounded-md border-none ring-1 ring-black/10"
							/>
						</div>

						<div className="grid w-full items-center">
							<Label htmlFor="phone" className="mb-2">
								Telefon <span className="text-red-500">&#42;</span>
							</Label>
							<Input
								type="text"
								id="phone"
								value={phoneInput}
								onChange={(e) => setPhoneInput(e.target.value)}
								className="shadow-sm rounded-md border-none ring-1 ring-black/10"
							/>
						</div>
					</div>

					<div className="grid w-full items-center py-3 md:py-4">
						<Label className="mb-3 md:mb-4">
							Vælge en service <span className="text-red-500">&#42;</span>
						</Label>
						<RadioGroup
							className="grid grid-cols-2 gap-x-6 gap-y-3.5"
							onValueChange={setSelectedRadio}
						>
							{radioItems.map((item, index) => (
								<div key={index} className="flex items-center space-x-2">
									<RadioGroupItem value={item.value} id={item.value} className="radio-item" />
									<Label htmlFor={item.value}>{item.label}</Label>
								</div>
							))}
						</RadioGroup>
					</div>

					<div className="grid grid-cols-2 gap-6">
						<div className="grid w-full items-center">
							<Label htmlFor="street" className="mb-2">
								Gade
							</Label>
							<Input
								type="text"
								id="street"
								value={streetInput}
								onChange={(e) => setStreetInput(e.target.value)}
								className="shadow-sm rounded-md border-none ring-1 ring-black/10"
							/>
						</div>

						<div className="grid w-full items-center">
							<Label htmlFor="apartment" className="mb-2">
								Evt. etage/nummer
							</Label>
							<Input
								type="text"
								id="apartment"
								value={apartmentInput}
								onChange={(e) => setApartmentInput(e.target.value)}
								className="shadow-sm rounded-md border-none ring-1 ring-black/10"
							/>
						</div>
					</div>

					<div className="grid grid-cols-2 gap-6">
						<div className="grid w-full items-center">
							<Label htmlFor="city" className="mb-2">
								By
							</Label>
							<Input
								type="text"
								id="city"
								value={cityInput}
								onChange={(e) => setCityInput(e.target.value)}
								className="shadow-sm rounded-md border-none ring-1 ring-black/10"
							/>
						</div>

						<div className="grid w-full items-center">
							<Label htmlFor="postalCode" className="mb-2">
								By
							</Label>
							<Input
								type="text"
								id="postalCode"
								value={postalCodeInput}
								onChange={(e) => setPostalCodeInput(e.target.value)}
								className="shadow-sm rounded-md border-none ring-1 ring-black/10"
							/>
						</div>
					</div>

					<div className="grid w-full items-center">
						<Label htmlFor="message" className="mb-2">
							Besked
						</Label>
						<Textarea
							id="message"
							placeholder="Type your message..."
							className="shadow-sm min-h-[11.25rem] overflow-auto rounded-md border-none ring-1 ring-black/10"
							value={messageInput}
							onChange={(e) => setMessageInput(e.target.value)}
						/>
					</div>

					<div className="mb-3 flex items-center space-x-2 text-sm md:mb-4">
						<Checkbox
							id="terms"
							checked={acceptTerms}
							required
							onCheckedChange={setAcceptTerms}
							className="checkbox-item rounded-md"
						/>
						<Label htmlFor="terms" className="cursor-pointer">
							I accept the{" "}
							<a className="text-primary underline" href="#">
								Terms
							</a>{" "}
							<span className="text-red-500">&#42;</span>
						</Label>
					</div>

					<div className="">
						<Button className="rounded-md border-primary bg-primary">Indsend</Button>
					</div>
				</form>
			</div>
		</section>
	);
};
