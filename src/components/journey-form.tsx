'use client';
import { Button } from './ui/button';
import { ArrowLeftRight, LocateFixed, Search } from 'lucide-react';
import { useJourney } from '@/hooks';
import { z } from 'zod';
import { ExtendedFC, TAirPort } from '@/lib/types';
import { Form, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import SelectInput from './inputs/select-input';
import DatePickerInput from './inputs/datepicker-input';
import { JourneySchema } from '@/lib/schema';
import { useRouter } from 'next/navigation';
import { useAirports } from '@/hooks/use-airports';

const filterAirports = (airports: TAirPort[], query?: string) => {
  if (!query) return airports;
  return airports.filter(
    (airport) => !airport.code.toLowerCase().includes(query.toLowerCase())
  );
};

const JourneyForm: ExtendedFC<{ onFormSubmit?: () => void }> = ({
  onFormSubmit
}) => {
  const form = useForm<z.infer<typeof JourneySchema>>({
    resolver: zodResolver(JourneySchema)
  });
  const router = useRouter();
  const onSubmit = () => {
    onFormSubmit?.();
    router.push(
      `/flights?from=${journey.from?.code}&to=${journey.to?.code}&depart=${journey.departDate?.getTime()}&return=${journey.returnDate?.getTime()}`
    );
  };
  const { journey, setJourney, swapAirports } = useJourney();
  const { airports } = useAirports();
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-9"
      >
        {' '}
        <div className="flex w-full gap-6">
          <div className="flex gap-3">
            <FormField
              name="from"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <SelectInput
                    options={filterAirports(airports, journey?.to?.code)}
                    placeholderIcon={
                      <LocateFixed className="text-muted-foreground" />
                    }
                    placeholderText="Where from"
                    value={journey.from}
                    valueLabel="Where from"
                    name="from"
                    onValueChange={(code) => {
                      const airport = JSON.parse(code) as TAirPort;
                      setJourney({
                        ...journey,
                        from: airport
                      });
                      field.onChange(airport);
                    }}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex flex-col justify-center">
              <Button
                variant="secondary"
                size="icon"
                className="self-start"
                onClick={(e) => {
                  e.preventDefault();
                  swapAirports();
                }}
              >
                <ArrowLeftRight size={20} />
              </Button>
            </div>
            <FormField
              name="to"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <SelectInput
                    options={filterAirports(airports, journey?.from?.code)}
                    placeholderIcon={
                      <LocateFixed className="text-muted-foreground" />
                    }
                    placeholderText="Where to"
                    value={journey.to}
                    valueLabel="Where to"
                    onValueChange={(code) => {
                      const airport = JSON.parse(code) as TAirPort;
                      setJourney({
                        ...journey,
                        to: airport
                      });
                      field.onChange(airport);
                    }}
                    name="to"
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex gap-3">
            <FormField
              name="departDate"
              control={form.control}
              render={({ field }) => {
                return (
                  <FormItem>
                    <DatePickerInput
                      value={journey.departDate}
                      onDateChange={(value) => {
                        setJourney({
                          ...journey,
                          departDate: value!
                        });
                        field.onChange(value);
                      }}
                      placeholderText="Departure"
                    />
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <FormField
              name="returnDate"
              control={form.control}
              render={({ field }) => {
                return (
                  <FormItem>
                    <DatePickerInput
                      value={journey.returnDate}
                      onDateChange={(value) => {
                        setJourney({
                          ...journey,
                          returnDate: value!
                        });
                        field.onChange(value);
                      }}
                      placeholderText="Return"
                    />
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
          </div>
        </div>
        <Button
          name="submit"
          type="submit"
          size="xl"
          className="h-[48px] self-end"
          onClick={form.handleSubmit(onSubmit)}
        >
          <Search size={16} />
          <div className="text-button">Search flights</div>
        </Button>
      </form>
    </Form>
  );
};

export default JourneyForm;
