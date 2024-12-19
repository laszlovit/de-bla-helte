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

// TODO: Whitelist domain in formbackend admin, once deployed to prod
// TODO: Add form validation with zod lib

export default function QuoteForm() {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		service: "",
		street: "",
		apartment: "",
		city: "",
		postalCode: "",
		message: "",
	});

	const [acceptTerms, setAcceptTerms] = useState<boolean | "indeterminate">(false);
	const [formSuccess, setFormSuccess] = useState(false);
	const [formSuccessMessage, setFormSuccessMessage] = useState("");
	const [formError, setFormError] = useState("");

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { id, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[id]: value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		try {
			const response = await fetch("https://www.formbackend.com/f/d6bbaf9d54863c56", {
				method: "POST",
				headers: {
					accept: "application/json",
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			if (!response.ok) {
				throw new Error("Server error, please try again later.");
			}

			await response.json();

			setFormData({
				firstName: "",
				lastName: "",
				email: "",
				phone: "",
				service: "",
				street: "",
				apartment: "",
				city: "",
				postalCode: "",
				message: "",
			});

			setAcceptTerms(false);
			setFormSuccess(true);
			setFormSuccessMessage("Din besked er blevet sendt! Vi vil snart kontakte dig.");
		} catch (error) {
			console.error("Error submitting the form:", error);
			setFormSuccess(false);
			setFormError(
				"Der skete en fejl. Prøv venligst igen og kontakt os, hvis problemet fortsætter.",
			);
		}
	};

	const radioItems = [
		{ value: "vinduespolering", label: "Vinduespolering" },
		{ value: "solcellevask", label: "Solcellevask" },
		{ value: "fliserens", label: "Fliserens" },
		{ value: "algebehandling", label: "Algebehandling" },
		{ value: "rens-of-tagrender", label: "Rens of tagrender" },
		{ value: "erhvervsrengoring", label: "Erhvervsrengøring" },
	];

	return (
		<section id="relume" className="px-[5%] py-8 md:py-12 lg:py-14">
			<div className="shadow-sm container max-w-lg rounded-lg bg-white p-8 ring-1 ring-black/5 xl:p-12">
				<form onSubmit={handleSubmit} className="grid grid-cols-1 grid-rows-[auto_auto] gap-6">
					<div className="grid grid-cols-2 gap-6">
						<div className="grid w-full items-center">
							<Label htmlFor="firstName" className="mb-2">
								Fornavn <span className="text-red-500">&#42;</span>
							</Label>
							<Input
								type="text"
								id="firstName"
								onChange={handleInputChange}
								value={formData.firstName}
								required
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
								onChange={handleInputChange}
								value={formData.lastName}
								required
								className="shadow-sm rounded-md border-none ring-1 ring-black/10"
							/>
						</div>
					</div>

					<div className="grid grid-cols-2 gap-6">
						<div className="grid w-full items-center">
							<Label htmlFor="email" className="mb-2">
								E-mailadresse <span className="text-red-500">&#42;</span>
							</Label>
							<Input
								type="email"
								id="email"
								onChange={handleInputChange}
								value={formData.email}
								required
								className="shadow-sm rounded-md border-none ring-1 ring-black/10"
							/>
						</div>

						<div className="grid w-full items-center">
							<Label htmlFor="phone" className="mb-2">
								Telefonnummer <span className="text-red-500">&#42;</span>
							</Label>
							<Input
								type="tel"
								id="phone"
								onChange={handleInputChange}
								value={formData.phone}
								required
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
							onValueChange={(value) =>
								setFormData((prevData) => ({ ...prevData, service: value }))
							}
							value={formData.service}
							required
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
								onChange={handleInputChange}
								value={formData.street}
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
								onChange={handleInputChange}
								value={formData.apartment}
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
								onChange={handleInputChange}
								value={formData.city}
								className="shadow-sm rounded-md border-none ring-1 ring-black/10"
							/>
						</div>

						<div className="grid w-full items-center">
							<Label htmlFor="postalCode" className="mb-2">
								Postnummer
							</Label>
							<Input
								type="text"
								id="postalCode"
								onChange={handleInputChange}
								value={formData.postalCode}
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
							onChange={handleInputChange}
							value={formData.message}
							className="shadow-sm rounded-md border-none ring-1 ring-black/10"
						/>
					</div>

					<div className="mb-3 flex items-center space-x-2 text-sm md:mb-4">
						<Checkbox
							id="terms"
							checked={acceptTerms}
							onCheckedChange={setAcceptTerms}
							required
							className="checkbox-item rounded-md"
						/>
						<Label htmlFor="terms" className="cursor-pointer">
							Jeg accepterer{" "}
							<a className="text-primary underline" href="#">
								vilkårene
							</a>{" "}
							<span className="text-red-500">&#42;</span>
						</Label>
					</div>

					<div className="mt-6">
						<Button type="submit" className="rounded-md border-primary bg-primary text-white">
							Indsend
						</Button>
					</div>

					{formSuccess && <div className="mt-4 text-green-500">{formSuccessMessage}</div>}
					{formError && <div className="mt-4 text-red-500">{formError}</div>}
				</form>
			</div>
		</section>
	);
}
