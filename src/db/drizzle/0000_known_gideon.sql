DO $$ BEGIN
 CREATE TYPE "public"."role" AS ENUM('volunteer', 'admin');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "project_f_account" (
	"userId" uuid NOT NULL,
	"type" text NOT NULL,
	"provider" text NOT NULL,
	"providerAccountId" text NOT NULL,
	"refresh_token" text,
	"access_token" text,
	"expires_at" integer,
	"token_type" text,
	"scope" text,
	"id_token" text,
	"session_state" text,
	CONSTRAINT "project_f_account_provider_providerAccountId_pk" PRIMARY KEY("provider","providerAccountId")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "project_f_location" (
	"id" uuid PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"street" text NOT NULL,
	"number" text DEFAULT 'S/N' NOT NULL,
	"additionalInfo" text,
	"city" text NOT NULL,
	"state" text NOT NULL,
	"zipCode" text NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"userId" uuid
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "project_f_session" (
	"sessionToken" text PRIMARY KEY NOT NULL,
	"userId" uuid NOT NULL,
	"expires" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "project_f_user" (
	"id" uuid PRIMARY KEY NOT NULL,
	"name" text,
	"email" text NOT NULL,
	"emailVerified" timestamp,
	"image" text,
	"phone" text,
	"document" text,
	"role" "role"
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "project_f_verificationToken" (
	"identifier" text NOT NULL,
	"token" text NOT NULL,
	"expires" timestamp NOT NULL,
	CONSTRAINT "project_f_verificationToken_identifier_token_pk" PRIMARY KEY("identifier","token")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "project_f_account" ADD CONSTRAINT "project_f_account_userId_project_f_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."project_f_user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "project_f_location" ADD CONSTRAINT "project_f_location_userId_project_f_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."project_f_user"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "project_f_session" ADD CONSTRAINT "project_f_session_userId_project_f_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."project_f_user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
