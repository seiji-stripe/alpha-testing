import type {
  ComputeAppliedCustomerBalanceFunction,
  CustomerBalanceApplication,
  BillDetails,
  AppliedCustomerBalanceResult,
} from "@stripe/scripts/customer_balance_application";

/**
 * Configuration for the customer balance application script.
 * Customize this to pass data from your Stripe dashboard.
 */
export interface CustomerBalanceApplicationConfig {
  // Add your configuration fields here
}

const computeAppliedCustomerBalance: ComputeAppliedCustomerBalanceFunction<
  CustomerBalanceApplicationConfig
> = (
  _context,
  _configuration,
  bill_details: BillDetails,
): AppliedCustomerBalanceResult => {
  // TODO: Implement your logic (e.g. apply up to customer_balance, same currency).
  const applied = Math.min(
    bill_details.total.amount,
    bill_details.customer_balance.amount,
  );

  return {
    applied_customer_balance: {
      amount: applied,
      currency: bill_details.total.currency,
    },
  };
};

export const customerBalanceApplication: CustomerBalanceApplication<CustomerBalanceApplicationConfig> =
  {
    computeAppliedCustomerBalance,
  };
